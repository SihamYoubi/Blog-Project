import SideBar from '../../components/SideBar';
import Chart from './Dashboard/Chart';
import PostsTable from './Dashboard/PostsTable'

export default function Admin() {
    return (<div>
        <Chart />
    {/* <SideBar /> */}
    <PostsTable />
    </div>
    );
}
