import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Sidemenu = () => {
    return (
        <Sidebar>
            <div className="title" style={{ padding: '10px', paddingLeft: '90px'}}>BÀI TẬP</div>
            <hr />
            <Menu>
                <MenuItem component={<Link to="/" />}> Bài 1 </MenuItem>
                <MenuItem component={<Link to="/Bai2" />}> Bài 2 </MenuItem>
                <MenuItem component={<Link to="/Bai3" />}> Bài 3 </MenuItem>
                <MenuItem component={<Link to="/Bai4" />}> Bài 4 </MenuItem>
                <MenuItem component={<Link to="/Bai5" />}> Bài 5 </MenuItem>
                <MenuItem component={<Link to="/Bai6" />}> Bài 6 </MenuItem>
                <MenuItem component={<Link to="/Bai7" />}> Bài 7 </MenuItem>
                <MenuItem component={<Link to="/Bai8" />}> Bài 8 </MenuItem>
                <MenuItem component={<Link to="/Bai9" />}> Bài 9 </MenuItem>
                <MenuItem component={<Link to="/Bai10" />}> Bài 10 </MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default Sidemenu;