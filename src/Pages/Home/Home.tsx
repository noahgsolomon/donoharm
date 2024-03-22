import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen">
        <div className="pt-24 flex h-full flex-col items-center justify-center">
          {/* <p className="text-2xl font-krypton">DO NO HARM </p> */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="font-krypton flex flex-col items-center">
              <p className="text-3xl">DO NO HARM</p>
              <span className="flex flex-row text-red-500 items-center justify-center">
                {"\n"}EVER
              </span>
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
      </div>
    </>
  );
}
