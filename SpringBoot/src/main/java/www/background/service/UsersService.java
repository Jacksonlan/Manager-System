package www.background.service;
import www.background.pojo.Result;

public interface UsersService {
    public Result getUsers();
    public Result delUser(Integer uid);
}
