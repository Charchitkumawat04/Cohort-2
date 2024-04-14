function sleep(milliseconds) {
    return new Promise(resolve => {
      const startTime = Date.now();
      while (Date.now() - startTime < milliseconds) {
        console.log('Entered Milisecond is more than the funcation taking time to execute.');
      }
      console.log(`Thread couldn't do anything in ${milliseconds/1000} seconds`);
      resolve();
    });
  }
  
// sleep(5000);
sleep(1000);