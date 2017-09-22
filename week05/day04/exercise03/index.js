class Promise2 {
  constructor(exec) {
    this.resolvePara = undefined;
    this.rejectPara = undefined;
    exec(this.fakeResolve.bind(this),this.fakeReject.bind(this));
    
  }

  then (onFulfilled, onRejected) {
    onFulfilled(this.resolvePara);
  }

  fakeResolve (value) {
    this.resolvePara = value;
  }

  fakeReject (error) {
    this.rejectPara = error;
  }

  

  
}


var promise = new Promise2(function(resolve,reject){
  resolve(5);
});