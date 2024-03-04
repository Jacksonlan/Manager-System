package www.background.controller;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import www.background.pojo.Result;
import www.background.service.UsersService;

@RestController
public class UsersController {
    @Resource
    private UsersService us;
    @GetMapping("/get_users")
    public Result getUsers(){
        return us.getUsers();
    }
    @GetMapping("/del_user")
    public Result delUser(Integer uid){
        return us.delUser(uid);
    }
}
