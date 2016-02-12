import Service from "../service";
import Method from "../methods/method";
//import convert from "./convert";
//import Param from "./param";

@Service.path("/helloWorld")
export class ServiceHelloWorld {
   @Method.get("/")
  testGet(params, req) { //  testGet(req, res, next)
    return new Promise((resolve) => {
    	resolve("helloWorld !!!");
    });
  }
};


@Service.path("/artistes")
export class ServiceArtistes {

  @Method.get("/export")
  testGet(params, req) { //  testGet(req, res, next)
    return new Promise((resolve) => {
      req.db.get('userlist').find({},{},function(e,docs){
        resolve(docs);
      });
    });
  }



};
