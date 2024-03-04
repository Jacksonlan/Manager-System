package www.background.service.impl;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;
import www.background.mapper.AdminMapper;
import www.background.pojo.Admin;
import www.background.pojo.Login;
import www.background.pojo.Result;
import www.background.service.AdminService;
import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {
    @Resource
    private AdminMapper am;
    @Override
    public Result AdminLogin(Login login) {
        Admin al=am.AdminLogin(login);
        if(al==null){
            return Result.fail();
        }else{
            return Result.success(al);
        }
    }
}
