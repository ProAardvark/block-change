import React from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let peers = this.props.peers.map((peer) => {
            return (
                <li key={peer.id}>
                    <Link to={'/peers/' + peer.id}>
                        {peer.address}
                    </Link>
                </li>
            )
        });

        return (
            <footer>
                <Grid>
                    <Row>
                        <Col sm={5}>
                            <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
                            <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
                            <p>© 2016 Sunny Aggarwal.</p>
                        </Col>
                        <Col sm={7}>
                            <h3 className='lead'><strong>Peers</strong> {peers.length} Connections</h3>
                            <ul className='list-inline'>
                                {peers}
                            </ul>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        );
    }
}

export default Footer;