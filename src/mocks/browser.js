import { setupWorker, rest } from "msw";

import { EditingProgressSteps } from "../EditingProgressSteps";



function withPolling(times, resolver) {
    let count = 0
  
    return (req, res, ctx) => {
      count++
      let isPending;
      if(count <= times/4)
      isPending = EditingProgressSteps.NONE;
      else if (count>times/4 && count <times/2)
      isPending= EditingProgressSteps.COPY;
      else if (count>times/2 && count <times *.75)
      isPending= EditingProgressSteps.UPLOAD;
      else if (count>times*.75 && count <times )
      isPending= EditingProgressSteps.UPLOAD;
      else
      {
      isPending= EditingProgressSteps.DONE;
      count =0;
      }
      return resolver(req, res, ctx, isPending)
    }
  }
  
  export const worker = setupWorker(
    rest.get('http://localhost:5000/get_endpoint',withPolling(40, (req, res, ctx, isPending) => {
        // if (isPending===EditingProgressSteps.NONE) {
            return res(ctx.json({ status: isPending }))
        //   }
    
        //   return res(ctx.json({ status: "MOCK DONE JOB" }))
        })

    ))

// export const worker = setupWorker(
// rest.get('http://localhost:5000/get_endpoint',(req,res,ctx)=>{
// return res(ctx.json({ status: "MOCK UPLOADING" 

// }))
// }),

// )

worker.start()