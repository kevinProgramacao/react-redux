import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers, getPosts, getAlbums, getPhotos } from '../actions/userActions';

class Table extends Component {
    constructor(props){
        super(props)

        this.state = {
            filterUser: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        this.props.getUsers();
        this.props.getPosts();
        this.props.getAlbums();
        this.props.getPhotos();
    }

    countPost = () => {
        const { users, posts, albums, photos } = this.props.users;
        var countPost   = 0,
            countAlbum  = 0,
            countPhoto  = 0;

        var arrayPost   = {
            posts : [],
            albums :[],
            photos :[]
            };

        users.map((user,index) => {
            if(user.daysofweek){
                arrayPost.posts[index] ={
                    userId: user.id,
                    allPost: countPost
                }

                arrayPost.albums[index] = {
                    userId: user.id, 
                    allAlbum: countAlbum
                }

                arrayPost.photos[index] = {
                    userId: user.id,
                    allPhoto: countPhoto
                }
            }else{
                posts.map(post => {
                    if (user.id === post.userId){
                        countPost++;

                        arrayPost.posts[index] ={
                                userId: user.id,
                                allPost: countPost
                            }
                        
                    }else{
                        countPost = 0;
                    }
                })
                albums.map(album => {
                    if(user.id === album.userId){
                        countAlbum++;

                        arrayPost.albums[index] = {
                            userId: user.id, 
                            allAlbum: countAlbum
                        }

                    }else {
                    countAlbum = 0;      
                    }
                })
                photos.map(photo => {
                    if(user.id === photo.albumId){
                        countPhoto++;

                        arrayPost.photos[index] = {
                            userId: user.id,
                            allPhoto: countPhoto
                        }

                    }else {
                        countPhoto = 0;
                    }
                })
            }
        })

        return arrayPost;
    }
    
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    getRandom = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    render(){
        const { users } = this.props.users;
        const { posts, albums, photos } = this.countPost();
        let arrayRideInGroup = ['Always', 'Sometimes', 'Never'];
        let arrayDaysWeek = ['Every Day', 'Week days', 'Mon, Wed, Fri', 'Mon, Tue, Wed', 'Weekend', 'Fri, Sun'];

       // console.log(this.state.filterUser)
        return(
            <div className="row">
                <div className="bg_user">
                    <div className="row">
                        <div className="column column-2">
                            <h1 className="font_user">Users</h1>
                        </div>
                        <div className="column column-7">
                            <hr/>
                        </div>
                        <div className="column column-3">
                            <div className="wrap">
                                <div className="search">
                                    <form>
                                        <input 
                                            type="text"
                                            onChange={this.onChange}
                                            name="filterUser"
                                            className="searchTerm"
                                            placeholder="Filter table content"
                                        />
                                        <button type="submit" className="searchButton">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="bg_table">
                        <table className="rwd-table table table-responsive" id="userTable">
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Name</th>
                                    <th>E-mail</th>
                                    <th>City</th>
                                    <th>Ride in Group</th>
                                    <th>Day of the week</th>
                                    <th>Posts</th>
                                    <th>Albums</th>
                                    <th>Photos</th>
                                </tr>
                            </thead>
                            <tbody>
                                { users.filter(user => {
                                    return (user.name.toLowerCase().indexOf(this.state.filterUser.toLowerCase()) >= 0 ||
                                    user.username.toLowerCase().indexOf(this.state.filterUser.toLowerCase()) >= 0 ||
                                    user.email.toLowerCase().indexOf(this.state.filterUser.toLowerCase()) >= 0 ||
                                    user.address.city.toLowerCase().indexOf(this.state.filterUser.toLowerCase()) >= 0)
                                }).map( user => (
                                    <tr key={user.id}>
                                        <td>{user.username}</td>
                                        <td>{user.name}</td>
                                        <td><a href={"mailto:"+user.email} className="font_mail">{user.email}</a></td>
                                        <td className="address">
                                            <a 
                                                href={"https://www.google.pl/maps/@"+user.address.geo.lat+","+user.address.geo.lng+",5z"}
                                                className="font_mail"
                                            >
                                                {user.address.city}
                                            </a> 
                                        </td>
                                        <td id="ride">{ user.rideingroup ? user.rideingroup : arrayRideInGroup[this.getRandom(0,3)]}</td>
                                        <td id="dayWeek">{user.daysofweek ? user.daysofweek : arrayDaysWeek[this.getRandom(0, 6)]}</td>
                                        {posts.filter(post => post.userId === user.id).map(({allPost}) => (
                                            <td key={user.id} id="posts">{allPost}</td>
                                        ))}
                                        {albums.filter(album => album.userId === user.id).map(({allAlbum}) => (
                                            <td key={user.id} id="albums">{allAlbum}</td>
                                        ))}
                                        {photos.filter(photo => photo.userId === user.id).map(({allPhoto}) => (
                                            <td key={user.id} id="photos">{allPhoto}</td>  
                                        ))}
                                                
                                        <td className="trash"><i className="far fa-trash-alt"></i></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }
}

Table.propTypes = {
    getUsers: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
    
}

const mapStateToProps = state => ({
    users: state.users

})

export default connect(mapStateToProps, { getUsers, getPosts, getAlbums, getPhotos })(Table);