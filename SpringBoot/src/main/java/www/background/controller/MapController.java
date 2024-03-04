package www.background.controller;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import www.background.pojo.Result;
import www.background.service.MapService;

@RestController
public class MapController {
    @Resource
    private MapService ms;
    @GetMapping("/set_maps")
    public Result SetMaps(){
        return ms.SetMaps();
    }
}
