package www.background.mapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import www.background.pojo.Admin;
import www.background.pojo.Login;

@Mapper
public interface AdminMapper {
    @Select("select * from admin where account=#{account} and password=#{password}")
    public Admin AdminLogin(Login login);
}
