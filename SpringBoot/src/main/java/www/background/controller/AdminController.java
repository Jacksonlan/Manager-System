package www.background.controller;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import www.background.pojo.Login;
import www.background.pojo.Result;
import www.background.service.AdminService;

@RestController
public class AdminController {
    @Resource
    private AdminService as;
    @PostMapping("/admin_login")
    public Result AdminLogin(@RequestBody Login login){
        return as.AdminLogin(login);
    }
}
