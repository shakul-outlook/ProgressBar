import { Stack, StackItem } from "@fluentui/react";
import { getClassNames } from "./ProgressBar.classNames"
const ProgressBar = (props) => {
    const { bgcolor, completed, progressMessage } = props;
    const {   baseStack, baseStack1, fillStack, stackItemStyles,stackItemStyles1 } = getClassNames(props);

console.log("SHAKUL  ====",completed)
  
    return (
        <Stack>
            <Stack.Item align="start" className={stackItemStyles}><span >{`Getting Ready for editing...`}</span></Stack.Item>
            <Stack.Item>
        <Stack>
                <Stack horizontal horizontalAlign="space-between" className={baseStack} >
                <Stack.Item align="start" className={stackItemStyles1}><span >{`${progressMessage}`}</span></Stack.Item>
                <Stack.Item align="end" className={stackItemStyles1}><span >{`${completed}%`}</span></Stack.Item>
                </Stack>
            
            <Stack.Item>
     <Stack  className={baseStack1} >
           <Stack className={fillStack} >
           {/* <Stack.Item align="end" className={stackItemStyles2}></Stack.Item> */}
      </Stack>
 
      </Stack>
      </Stack.Item>
      </Stack>
      </Stack.Item>
      </Stack>
 
    );
  };
  
  export default ProgressBar;