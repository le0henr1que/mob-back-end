

export class AppError extends Error {

    public readonly message: string;
    public readonly statusCode: number;
  
    constructor(message: string, statusCode:number) {
      super(message);
      Object.setPrototypeOf(this, AppError.prototype);
        
      
      this.message = message;
      this.statusCode = statusCode;

    //   console.log("App Erro called")
    }
  }