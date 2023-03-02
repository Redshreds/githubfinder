import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.componentDidCatch.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      loginhtml_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    return <div>{name}</div>;
  }
}

export default User;
