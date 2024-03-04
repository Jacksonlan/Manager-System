package www.background.service;
import www.background.pojo.Goods;
import www.background.pojo.Result;

public interface GoodsService {
    public Result getGoods();
    public Result addGood(Goods g);
    public Result removeGood(Integer load_id);
    public Result updateGood(Goods g);
}
