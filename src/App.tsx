import Navbar from "./components/Navbar";
import "./globals.css";

function App() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="pt-24 flex h-full flex-col items-center justify-center">
        {/* <p className="text-2xl font-krypton">DO NO HARM </p> */}
        <p className="font-krypton text-3xl">DO NO HARM</p>
        <pre className="text-[8px]">
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
  );
}

export default App;
