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



  @Method.post("/post")
  testPost(params, req) { //  testPost(req, res, next)
    return new Promise((resolve) => {
      
      resolve("Bienvenue en POST !!!");
      
    });
  }

  @Method.put("/put")
  testPut(params, req) { //  testPut(req, res, next)
    return new Promise((resolve) => {
      
      resolve("Bienvenue en PUT !!!");
      
    });
  }

  @Method.delete("/delete")
  testDelete(params, req) { //  testDelete(req, res, next)
    return new Promise((resolve) => {
      
      resolve("Bienvenue en DELETE !!!");
      
    });
  }

  @Method.patch("/patch")
  testPatch(params, req) { //  testPatch(req, res, next)
    return new Promise((resolve) => {
      
      resolve("Bienvenue en PATCH !!!");
      
    });
  }
};

@Service.path("/timer")
export class ServiceTimer {
   @Method.get("/")
  testGet(params, req) { //  testGet(req, res, next)
    return new Promise((resolve) => {
      resolve("helloWorld !!!");
    });
  }
};


