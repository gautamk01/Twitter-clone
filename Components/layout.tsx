import { Sidebar } from "./layout/sidebar";

interface LayoutProps {
  // This line defines an interface called LayoutProps which specifies the type of the props that the Layout component will accept.
  children: React.ReactNode;
  //This means that the children prop can be any valid React node, such as a string, a number, an element, or an array of any of these types.
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  //it is a functional component that accepts props of type LayoutProps
  //The function takes in an object with a property called children as its argument. This is a React convention that allows us to pass in any number of child elements to the component.
  return (
    <div className=" h-screen bg-amber-800">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
