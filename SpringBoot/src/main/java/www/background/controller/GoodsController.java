package www.background.controller;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;
import www.background.pojo.Goods;
import www.background.pojo.Result;
import www.background.service.GoodsService;

@RestController
public class GoodsController {
    @Resource
    private GoodsService gs;
    @GetMapping("/get_goods")
    public Result getGoods(){
        return gs.getGoods();
    }
    @PostMapping("/add_good")
    public Result addGood(@RequestBody Goods g){
        return gs.addGood(g);
    }
    @GetMapping("/remove_good")
    public Result removeGood(Integer load_id){
        return gs.removeGood(load_id);
    }
    @PostMapping("/update_good")
    public Result updateGood(@RequestBody Goods g){
        return gs.updateGood(g);
    }
}
