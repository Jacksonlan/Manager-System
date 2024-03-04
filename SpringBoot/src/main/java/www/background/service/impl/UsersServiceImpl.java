package www.background.service.impl;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;
import www.background.mapper.UsersMapper;
import www.background.pojo.Result;
import www.background.pojo.Users;
import www.background.service.UsersService;

import java.util.List;

@Service
public class UsersServiceImpl implements UsersService {
    @Resource
    private UsersMapper us;

    @Override
    public Result getUsers() {
        List<Users> gu=us.getUsers();
        if (gu.isEmpty()){
            return Result.fail();
        }
        return Result.success(gu);
    }
    public Result delUser(Integer uid){
        Boolean du=us.delUser(uid);
        if(du){
            return Result.success(du);
        }else {
            return Result.fail();
        }
    }
}
