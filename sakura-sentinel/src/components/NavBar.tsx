import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

export function NavBar() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => handleNavigation('/')}
        >
          <img src="/og-image.svg" alt="Sakura Logo" className="h-8 w-8" />
          <span className="font-semibold text-xl text-sakura-300">Sakura no Kaika</span>
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                onClick={() => handleNavigation('/')}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Diensten</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <div className="grid grid-cols-1 gap-2">
                    <NavigationMenuLink 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                      onClick={() => handleNavigation('/file-share')}
                    >
                      <div className="text-sm font-medium leading-none">End-to-End File Sharing</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Veilig bestanden delen met end-to-end encryptie
                      </p>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Over Ons</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <div className="grid grid-cols-1 gap-2">
                    <div className="block select-none space-y-1 rounded-md p-3 leading-none">
                      <div className="text-sm font-medium leading-none">Sakura no Kaika</div>
                      <p className="line-clamp-4 text-sm leading-snug text-muted-foreground">
                        Een toonaangevend cybersecuritybedrijf dat zich richt op het beschermen van digitale landschappen van bedrijven over de hele wereld.
                      </p>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}