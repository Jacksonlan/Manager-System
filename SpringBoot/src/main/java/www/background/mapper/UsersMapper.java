package www.background.mapper;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import www.background.pojo.Users;

import java.util.List;

@Mapper
public interface UsersMapper {
    @Select("select * from user")
    public List<Users> getUsers();
    @Delete("delete from user where uid=#{uid}")
    public Boolean delUser(Integer uid);
}
