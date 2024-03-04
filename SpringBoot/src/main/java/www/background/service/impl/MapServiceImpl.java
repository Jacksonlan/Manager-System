package www.background.service.impl;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;
import www.background.mapper.MapMapper;
import www.background.pojo.Map;
import www.background.pojo.Result;
import www.background.service.MapService;
import java.util.List;

@Service
public class MapServiceImpl implements MapService {
    @Resource
    private MapMapper mm;
    @Override
    public Result SetMaps() {
        List<Map> sm=mm.SetMaps();
        if(sm.isEmpty()){
            return Result.fail();
        }
        return Result.success(sm);
    }
}
