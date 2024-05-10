package com.lhcyh.qwclq.example;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Example<Model> {
    private List<List<Criterion>> orCriterionList;
    private Set<String> leftJoinList;
    private Integer limitStart;
    private Integer limitNum;
    private Criterion orderBy;

    public enum Order{
        ASC("asc"),
        DESC("desc");
        private String value;
        Order(String value){
            this.value=value;
        }
    }

    public Example(){
        orCriterionList=new ArrayList<>();
        List<Criterion> criterionList=new ArrayList<>();
        orCriterionList.add(criterionList);
        leftJoinList=new HashSet<>();
    }

    private Method getGetMethod(Object model,Field field){
        // 获取属性的名字
        String property = field.getName();
        // 将属性的首字符大写，方便构造get，set方法
        String name = property.substring(0, 1).toUpperCase() + property.substring(1);
        Method m=null;
        try {
            m = model.getClass().getMethod("get" + name);
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        }
        return m;
    }

    private Boolean isLeftJoinProperty(Field field){
//        if(model instanceof Enum){
//            return false;
//        }

        if(field.getType().isEnum()){
            return false;
        }

        if(field.getType().getClassLoader()==null){
            return false;
        }else {
            return true;
        }

        // 获取包名
//        String modelPackage=model.getClass().getPackage().getName();
//        modelPackage=modelPackage.substring(0,modelPackage.lastIndexOf('.'));
//        String fieldPackage=field.getType().getPackage().getName();
//        fieldPackage=fieldPackage.substring(0,fieldPackage.lastIndexOf('.'));
//        if(modelPackage.equals(fieldPackage)){
//            return true;
//        }else {
//            return false;
//        }
    }

    private String getUnderLineString(String string){
        String resString="";
        if(string==null){
            return null;
        }else {
            //string=string.replace("Entity","");
            resString=string.substring(0,1).toLowerCase();
        }
        for(int i=1;i<string.length();i++){
            if(Character.isUpperCase(string.charAt(i))){
                resString+="_"+Character.toLowerCase(string.charAt(i));
            }else {
                resString+=string.charAt(i);
            }
        }
        return resString;
    }

    private Class getInitialClass(Class subClass){
        if(subClass==Object.class){
            return subClass;
        }
        while (subClass.getSuperclass()!=Object.class){
            subClass=subClass.getSuperclass();
        }
        return subClass;
    }

    private void loadCriterion(Object model1,Object model2, Criterion.Condition condition, Criterion.ValueType valueType,Order order){
        if(model1==null||(model2==null&&valueType== Criterion.ValueType.BetweenValue)){
            return;
        }
        List<Field> fieldList=new ArrayList<>();
        Class modelClass=model1.getClass();
        while (true){
            // 获取实体类的所有属性，返回Field数组
            Field[] fields = modelClass.getDeclaredFields();
            for(int i=0;i<fields.length;i++){
                //判断是否为静态属性
                if(Modifier.isStatic(fields[i].getModifiers())){
                    continue;
                }
                fieldList.add(fields[i]);
            }
            if(modelClass.getSuperclass()==Object.class){
                break;
            }
            modelClass=modelClass.getSuperclass();
        }


        // 遍历所有属性
        for (Field field:fieldList) {
            Method m = getGetMethod(model1,field);
            Object value1=null;
            Object value2=null;
            try {
                // 调用getter方法获取属性值
                value1 = m.invoke(model1);
                if(model2!=null) {
                    value2 = m.invoke(model2);
                }
            } catch (Exception e) {
                e.printStackTrace();
                continue;
            }
            if(value1==null||(value2==null&&valueType== Criterion.ValueType.BetweenValue)){
                continue;
            }

            if(isLeftJoinProperty(field)){
                loadCriterion(value1,value2,condition,valueType,order);
                leftJoinList.add(getUnderLineString(getInitialClass(field.getType()).getSimpleName()));
            }else {
                Criterion criterion=new Criterion();
                if(condition!=null){
                    criterion.setCondition(condition.value);
                }
                String table=modelClass.getSimpleName();
                table=getUnderLineString(table);
                criterion.setTable(table);
                criterion.setField(getUnderLineString(field.getName()));
                if(valueType!=null){
                    criterion.setValueType(valueType.value);
                }
                criterion.setValue(value1);
                criterion.setSecondValue(value2);
                if(order==null) {
                    orCriterionList.get(orCriterionList.size() - 1).add(criterion);
                }else {
                    criterion.setCondition(order.value);
                    orderBy=criterion;
                }
            }
        }
    }

    public Example<Model> or(){
        List<Criterion> criterionList=new ArrayList<>();
        orCriterionList.add(criterionList);
        return this;
    }

    public Example<Model> andIsNull(Model model){
        loadCriterion(model,null, Criterion.Condition.IsNull, Criterion.ValueType.NoValue,null);
        return this;
    }

    public Example<Model> andIsNotNull(Model model){
        loadCriterion(model,null, Criterion.Condition.IsNotNull, Criterion.ValueType.NoValue,null);
        return this;
    }

    public Example<Model> andBetween(Model model1,Model model2){
        loadCriterion(model1,model2, Criterion.Condition.Between, Criterion.ValueType.BetweenValue,null);
        return this;
    }

    public Example<Model> andEqualTo(Model model){
        loadCriterion(model,null, Criterion.Condition.EqualTo, Criterion.ValueType.SingleValue,null);
        return this;
    }

    public Example<Model> andGreaterThan(Model model){
        loadCriterion(model,null, Criterion.Condition.GreaterThan, Criterion.ValueType.SingleValue,null);
        return this;
    }

    public Example<Model> andLessThan(Model model){
        loadCriterion(model,null, Criterion.Condition.LessThan, Criterion.ValueType.SingleValue,null);
        return this;
    }

    public Example<Model> andLessThanOrEqualTo(Model model){
        loadCriterion(model,null, Criterion.Condition.LessThanOrEqualTo, Criterion.ValueType.SingleValue,null);
        return this;
    }

    public Example<Model> andLike(Model model){
        loadCriterion(model,null, Criterion.Condition.Like, Criterion.ValueType.SingleValue,null);
        return this;
    }

    public Example<Model> limit(Integer limit){
        this.limitStart=limit;
        this.limitNum=null;
        return this;
    }

    public Example<Model> limit(Integer start,Integer num){
        this.limitStart=start;
        this.limitNum=num;
        return this;
    }

    public Example<Model> orderBy(Model model){
        loadCriterion(model,null,null,null, Order.ASC);
        return this;
    }

    public Example<Model> orderBy(Model model,Order order){
        loadCriterion(model,null,null,null,order);
        return this;
    }

    public List<List<Criterion>> getOrCriterionList() {
        return orCriterionList;
    }

    public Set<String> getLeftJoinList() {
        return leftJoinList;
    }

    public Integer getLimitStart() {
        return limitStart;
    }

    public Integer getLimitNum() {
        return limitNum;
    }

    public static class Criterion{
        enum ValueType{
            NoValue("noValue"),
            SingleValue("singleValue"),
            BetweenValue("betweenValue"),
            ListValue("listValue");
            private String value;

            ValueType(String value){
                this.value=value;
            }
        }
        enum Condition{
            EqualTo("="),
            GreaterThan(">"),
            LessThan("<"),
            LessThanOrEqualTo("<="),
            Between("between"),
            IsNull("is null"),
            IsNotNull("is not null"),
            Like("like");
            private String value;
            Condition(String value){
                this.value=value;
            }
        }
        private String table;
        private String field;
        private Object value;
        private Object secondValue;
        private String valueType;
        private String condition;

        public String getTable() {
            return table;
        }

        public void setTable(String table) {
            this.table = table;
        }

        public String getField() {
            return field;
        }

        public void setField(String field) {
            this.field = field;
        }

        public Object getValue() {
            return value;
        }

        public void setValue(Object value) {
            this.value = value;
        }

        public String getValueType() {
            return valueType;
        }

        public void setValueType(String valueType) {
            this.valueType = valueType;
        }

        public String getCondition() {
            return condition;
        }

        public void setCondition(String condition) {
            this.condition = condition;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public void setSecondValue(Object secondValue) {
            this.secondValue = secondValue;
        }
    }

}