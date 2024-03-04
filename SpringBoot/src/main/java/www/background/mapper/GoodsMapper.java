package www.background.mapper;
import org.apache.ibatis.annotations.*;
import www.background.pojo.Goods;

import java.util.List;

@Mapper
public interface GoodsMapper {
    @Select("select * from goods")
    public List<Goods> getGoods();
    @Insert("insert into goods (good_id,good_name,introduce,business,price,`load`,stock) values (#{good_id},#{good_name},#{introduce},#{business},#{price},#{load},#{stock})")
    public Boolean addGood(Goods g);
    @Delete("delete from goods where load_id=#{load_id}")
    public Boolean removeGood(Integer load_id);
    @Update("update goods set good_id=#{good_id},good_name=#{good_name},introduce=#{introduce},business=#{business},price=#{price},`load`=#{load},stock=#{stock} where load_id=#{load_id}")
    public Boolean updateGood(Goods g);
}
