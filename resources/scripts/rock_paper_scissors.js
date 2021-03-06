class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    var randomValue = Math.floor(Math.random()*3);
    return acceptedValues[randomValue];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    
    if (userSelection === cpuSelection){
      return `tie`;
    }
    else if (userSelection === `rock`){
      if (cpuSelection === `scissors`){
        return `win`;
      }
    }
    else if (userSelection === `paper`){
      if (cpuSelection === `rock`){
        return `win`;
      }
    }
    else if (userSelection === `scissors`){
      if (cpuSelection === `paper`){
        return `win`;
      }
    }
    return `lose`;
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    const cpuSelection = this.generateCPUResponse();
    const result = this.determineWinner(userSelection, cpuSelection);

    if(result == 'win'){
      this.score.user ++;
      this.gameHistoryLog.push(this.username + " selected: " + userSelection + " CPU seclected: " + cpuSelection + ". " + this.username + " WINS");  
    }
    else if(result == 'lose'){
      this.score.cpu ++;
      this.gameHistoryLog.push(this.username + " selected: " + userSelection + " CPU seclected: " + cpuSelection + " CPU WINS");
    }
    else if(result == 'tie'){
      this.gameHistoryLog.push(this.username + " selected: " + userSelection + " CPU seclected: " + cpuSelection + " It's a Tie");
    }


    /*
    var NEW_SCORE = this.determineWinner(userSelection, cpuSelection);
    this.score = {
      user: NEW_SCORE,
      cpu: NEW_SCORE
    }
    */
    
  }

}