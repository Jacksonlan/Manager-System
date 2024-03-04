package www.background.mapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import www.background.pojo.Map;
import java.util.List;

@Mapper
public interface MapMapper {
    @Select("select good_name,sum(sell) as sell,sum(stock) as stock,sum(price*sell) as SellPrice from goods group by good_name;")
    public List<Map> SetMaps();
}
