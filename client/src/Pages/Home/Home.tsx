import Navbar from "@/components/Navbar";
import PostCard from "../Dashboard/components/PostCard";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-16 flex h-full flex-col items-center justify-center">
        {/* <p className="text-2xl font-krypton">DO NO HARM </p> */}
        <div className="flex flex-col gap-12 items-center justify-center">
          <div className="font-krypton flex flex-col items-center">
            <p className="text-5xl">DO NO HARM</p>
            <span className="flex flex-row text-red-500 items-center justify-center text-xl">
              {"\n"}EVER
            </span>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm z-10 border rounded-lg flex flex-col gap-2 justify-center items-center">
              <EyeOff className="text-primary/60" />
              <p className="font-krypton text-primary/60 text-xs">
                content might be offensive
              </p>
              <Button
                variant={"none"}
                className="text-xs text-primary/60 underline font-krypton"
              >
                see why
              </Button>
              <Button size={"sm"} variant={"outline"}>
                view
              </Button>
            </div>
            <PostCard
              name="@bombi"
              image="/pfp-12.webp"
              text="In a world where words are weapons, Every utterance becomes a transgression."
            />
          </div>

          <pre className="text-[6px]">
            {`
                                         ***+++======+++***+                                        
                                   +++=:..:--=+++**+++=-:::..-+*-                                   
                              +++=:.-=++*********************+=-::=++*                              
                           ++-::-++************######************++-::-++                           
                        ++-:-=+********###%%@@@@@@@@@@@@%%####*******+=-:=+                         
                      ++::=+******###%@@@@@@@@@@@@@@@@@@@@@@@@%###******+=:-+                       
                    +=--+******##%@@@@@@@@@@%%%      #%%%@@@@@@@@@%##*****+=--=+                    
                  +=--=****+-*%@@@@@@@%#                     %%@@@@@@%##*****=--+-                  
                 +--+*******=--%@%%                              %%@@@@%##****+=:==                 
               +=:=+***###***+=:-+          @@@@@                  -+%@@@%##****+--+                
              +--+****#%@%#****+=:-+  #%%%%%%####%%%%%@%             =*%@@@%#****+=:++              
            ++-=+***##@@@@@%#****+==%%#*+=:....-++++++*##%%            -+%@@@%#****+-=+             
            +:=****#%@@@@@@@@##**#%*+++==.......+++++++++**%%            =#@@@%#****+-=+            
          +=:=****#%@@%*-+%@@@@%%*+:...:=+====+**************%%            +%@@%#****=:++           
         +=:=+***#@@@%*   -*%@@#+-.....=+*#%@%#********####***#%%           #@@@@#****=:+           
         +-=+***#@@@%*      *%*=.....-+**@%**#%%*****#%%%%@%####%%           #@@@@#***+=:*          
        *=-+***#%@@@#      #%*=....:=***@@@@--=##***#@@@%-=*%####%%           #@@@%#***+--*         
        +-=****%@@@%      %%*++-::=+***#@@@@%..-#***%@@@@+.:+#####%#           #@@@%****=-+         
       #=-+***#@@@@      %%#+++++++****%@@@@@-..+***%@@@@#:.:*#####@%           @@@@#***+-=#        
       %-=+***%@@@@      @%*++++++*****%@@@@@=..:***%@@@@%-..=#####%@           @@@@#****--+        
      %%-+***#@@@@      @@%#+*++*******%@@@@@=...***%@@@@%-..-#####%@%          @@@@%****++%        
      @%++***#@@@%      @@%#***********%@@@@@=...***%@@@@%:..-###%##@%          @@@@@#*****@        
      @%++***%@@@*      %%##****%@@#***#@@@@%:..-***%@@@@*...+##%@%#@%          @@@@@%###*#@  %@@#  
      @%++***%@@@=   #%=.:=*#**#@@%@#***%@@@:...*****@@@%:..:*##@@@%@@          @@@-...:=%#@#*:..*@ 
      @%#****#@@@+ %#-:=**######%%*+@%#***-...:+******#+...-##%@@%#@@        %@@@%=:-=:.:+%@*..:=#@ 
      @%#****#@@@##=.-*####%@%####*-:=%@%##***************##%@@@@%%@%      %*-::..-%%%#.:+*-.:-*%#  
      @%##***#@@@%=.=*##%@@@@%%###%=:..-%@@@%##########%@@@@@%##%%@@*=    =%..:--=*@#*:.=-.:-+#*-:*%
      #@##****%@%+:-*#%@%   %@%%###%+...+..-%%@@@@@@@@@@#%*%*#%%#@@@%-.-=%%@..:=##*=:-....-+#:...-*%
       %%#****%@*=:+*#@%    #%@%%%####=:+..:=..=....:=+=+#*%#%%%@@@@%#***++*%:....:-#=.:.....:-=+#% 
        %#****%%*-:+#%@       #@@%%%%%%%%+--=..=....-=+++%%%%%@@@@@%%####**#@=:....:=+--:..:=*%@@   
        %%#***%%*+=+#%@        +#@@@@@%%%%##%%%%####%@%%%%%%@@%#@%@@@%%%%%%%*#=-..........-+%*      
         %##**%%#+++*%%          +#@@@@@@@%%%%%%%%%%%%%%@@@@@@@%+=   @@%@@@@:-#*=-:.....:-+%%       
         #%##*%@%*+++*%%            #%@@@@@@@@@@@@@@@@@@@@@@@@%*--=+       %*-+%***+====+#%         
          #%##%@@#*+++*%%@%%%          %@@@@@@@@@@@@@%@@@@@@%#**+=--+       %#=-+#####%@%*          
           +%#%@@@#***#-...:-#@%%%%-#%%               -*@@@@%#*****=:-+    +=-*******@@*            
            *%#%@@@##=.:-+##=:::...::..#%               =#@@@@%#****+=:=++=:-*****##@@#             
             +##%@@@-.-**:........=*=-=#%                -=#@@@@%#****+=---+****##%@@#              
              =*%%@+:=#=:..-**=.....:*%%                   -=#@@@@%#*****+****##%@@@+               
                +#%%-**-.:*+:.....::-::*#                    -=%@@@@*-+*****##%@@@#*    
                 -*%@@*-:...:+:..:-=*+=+@                      -+%+-=+*****#%@@@@#                  
                   -+%%=:.......:-==+#%#++                -*+=-:--+*****##%@@@%#=                   
                     =*#=:....:-=+#*+#*-:.:-++**######*+=:..-=+*******##%@@@@#+                     
                       *%*=---=**++%@@%#*****=---==---=++**********##%@@@@@#=                       
                         %%%@#+++%@@@%%#**********************###%@@@@@@@#+                         
                             @@@@@@@@@%%#####**#############%%@@@@@@@@@                             
                                 #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                                 
                                      @@@@@@@@@@@@@@@@@@@@@@@@                                      
                                             @@@@@@@@@@                                             
          `}
          </pre>
        </div>
      </div>
    </>
  );
}