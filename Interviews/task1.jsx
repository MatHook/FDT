class Child extends Component {
  async componentDidMount() {
    const res = await fetch("someurl");
    this.setState({ data: await res });
  }
  // Так же для наших фантомных запросов можем использовать async/await

  render() {
    return null;
  }
}

class Parent extends Component {
  state = {
    currentRoute: "/path1",
  };
  render() {
    const { currentRoute } = this.state;
    return (
      <div>
        <Child route={currentRoute} key={currentRoute} />
        <p>
          Если добавить уникальный <i>key</i>, то React будет следить за
          изменениями и при изменении ключа будет вызывать{" "}
          <i>componentWillUnmount</i>; После чего наш Child компонент будет
          re-monunt'ed и снова будет вызван componentDidMount
        </p>
        <button onClick={() => this.setState({ currentRoute: "/path2" })} />
      </div>
    );
  }
}
