import { configs } from "@/components/custom/navigation/config";
import { Navigation } from "@/components/custom/navigation/Navigation";


  
export default function NameLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            <Navigation configs={configs}/>
            {children}
        </div>
    );
}