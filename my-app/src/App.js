import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

class UsersList extends React.Component {
    state = {
        users: [],
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <div>
                <h2>Список користувачів</h2>
                <ul>
                    {this.state.users.map(user => (
                        <li key={user.id}>
                            {user.name} {' '}
                            <Link to={`/albums/${user.id}`}><button>Album</button></Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class AlbumsList extends React.Component {
    state = {
        albums: [],
    };

    componentDidMount() {
        const userId = this.props.match.params.userId;
        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => {
                this.setState({ albums: response.data });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <div>
                <h2>Список альбомів</h2>
                <ul>
                    {this.state.albums.map(album => (
                        <li key={album.id}>
                            {album.title} {' '}
                            <Link to={`/photos/${album.id}`}><button>Photos</button></Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class PhotosList extends React.Component {
    state = {
        photos: [],
    };

    componentDidMount() {
        const albumId = this.props.match.params.albumId;
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => {
                this.setState({ photos: response.data });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <div>
                <h2>Фото з альбому</h2>
                <ul>
                    {this.state.photos.map(photo => (
                        <li key={photo.id}>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={UsersList} />
                <Route path="/albums/:userId" component={AlbumsList} />
                <Route path="/photos/:albumId" component={PhotosList} />
            </Switch>
        </Router>
    );
}

export default App;