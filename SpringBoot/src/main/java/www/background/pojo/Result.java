package www.background.pojo;
import lombok.Data;

//设置数据库返回代码
@Data
public class Result {
    private Integer code;
    private String message;
    private Object data;

//    数据返回失败
    public static Result fail(){
        return result(400,"失败","fail");
    }

//    数据返回成功
    public static Result success(Object data){
        return result(200,"成功",data);
    }

//    设置数据返回
    public static Result result(int code,String message,Object data){
        Result r=new Result();
        r.setCode(code);
        r.setMessage(message);
        r.setData(data);
        return r;
    }
}
