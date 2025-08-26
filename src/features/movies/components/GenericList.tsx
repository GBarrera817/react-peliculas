import Loading from "../../../components/loading";

export default function GenericList<T>(props: GenericListProps<T>) {

    if (!props.list) {
        return props.loadingUI ? props.loadingUI : <Loading/>;
    } 
    else if (props.list.length === 0) {
        return props.emtpyListUI ? props.emtpyListUI : "There's no items to show.";
    }
    else {
        return props.children;
    }
}

interface GenericListProps<T> {
    list: T[] | undefined;
    children: React.ReactNode;
    emtpyListUI?: React.ReactNode;
    loadingUI?: React.ReactNode;
}