import { useParams, Outlet} from "react-router-dom";
export const MilkteaFlavor = () => {
    const {flavor} = useParams();
    return(
        <>
            <h1>MilkTea Flavor is {flavor}</h1>
            
        </>
    );
}