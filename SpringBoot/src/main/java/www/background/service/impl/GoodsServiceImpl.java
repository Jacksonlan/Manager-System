package www.background.service.impl;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;
import www.background.mapper.GoodsMapper;
import www.background.pojo.Goods;
import www.background.pojo.Result;
import www.background.service.GoodsService;

import java.util.List;

@Service
public class GoodsServiceImpl implements GoodsService {
    @Resource
    GoodsMapper gm;
    @Override
    public Result getGoods() {
        List<Goods> gg=gm.getGoods();
        if(gg.isEmpty()){
            return Result.fail();
        }
        return Result.success(gg);
    }
    public Result addGood(Goods g){
        Boolean ag=gm.addGood(g);
        if(ag){
            return Result.success(true);
        }else {
            return Result.fail();
        }
    }
    public Result removeGood(Integer load_id){
        Boolean rg=gm.removeGood(load_id);
        if(rg){
            return Result.success(true);
        }else {
            return Result.fail();
        }
    }
    public Result updateGood(Goods g){
        Boolean ug=gm.updateGood(g);
        if (ug){
            return Result.success(true);
        }else {
            return Result.fail();
        }
    }
}
