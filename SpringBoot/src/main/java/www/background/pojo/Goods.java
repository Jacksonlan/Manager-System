package www.background.pojo;
import lombok.Data;

@Data
public class Goods {
    private Integer good_id;
    private Integer load_id;
    private String good_name;
    private String introduce;
    private String business;
    private String load;
    private Double price;
    private Integer stock;
}
