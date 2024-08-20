import { Nav, Container, Row, Col } from 'react-bootstrap';
import OffcanvasExample from './navbar';
import './App.css';
import { Link } from 'react-router-dom';
import greenlight from './greenlight.png'

import wartcoin from './soldierwart.webp';
import tokengraph from './tokenomics.png';
import sandwich from './sandwichproblem.webp';
import { BiSolidChevronsDown } from "react-icons/bi";

const Landing = () => (

    

    <div className='backdrop' >

        <OffcanvasExample />



        <Container >
            <Row><Col>
             <img className='logohome' src={tokengraph} alt="" /><h1>Tokenomics</h1><p className='paragraph'>  100% is publicly mineable. 0% is minted, premined, reserved for anyone.
            </p>
               <br/><br/><br/>
               <img className='logohome' src={wartcoin} alt="" /><br />
            
               
               
            </Col>
                <Col>
                    <h1>WARTHOG NETWORK</h1><br />
                    <h2>-Rethinking the blockchain-</h2><br/>
                        <p className='paragraph'><strong>"Warthog’s decentralized network empowers individuals with fair, balanced, and synergized CPU/GPU work. It secures hardcoded DeFi and token technologies, eliminating the risks of smart contracts. Our goal is a safer, more efficient blockchain, aligned with the original vision of cryptocurrency: "one CPU, one vote."</strong></p>
                    <p className='paragraph'> Warthog network strives to be the most innovative and technological state of the art blockchain in the world. Our mission is to cross-breed innovative approaches into blockchain technology to defend decentralization and bring easy-to-use decentralized finance to the masses.
                        We are a relatively young project with the ambitious goals to revolutionize the crypto space by aggressively implementing<strong> features that no other blockchain project can offer</strong>: fast and resource-friendly sync by using a thread-based sync model, the world's first Proof of Balanced Work mining algorithm which favors decentralization, nodes which can run and save the chain directly in your browser, and soon also peer to peer communication between browser nodes.
                    </p>
                    <p className='paragraph'>
                       <h2> But there is more</h2><p> We currently make great progress in solving the Sandwich Problem (front/back running) in DeFi using hard-coded non-smart-contract DeFi and a custom matching engine. This would solve one of the biggest problems of DeFi. In the long run, Warthog shall become a notable player in the DeFi world. Our matching engine shall merge the two different worlds of discrete orders (like in classical exchanges) and continuous liquidity pools. Atomic swaps with other chains are also planned.</p>
                    </p>
                </Col>
            </Row>


            <Row><Col>
                

            </Col>
                <Col>
               
                </Col></Row>
            <br /><br />
            <Row >
                
                <h1 style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                     <img className='glamoricons' src={greenlight} alt=''></img>
                     KEY FACTS   
                     <img className='glamoricons' src={greenlight} alt=''></img>
                     
                </h1>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <BiSolidChevronsDown />
                <BiSolidChevronsDown />
                </div>
                <p className='paragraph'>Remember the time when crypto was<strong> interesting and fun</strong>? We want to bring this golden age of crypto <strong>back to life</strong></p>
              
                <Row>
               
                <Col >
                
                   <h2 className='keyheaders'>no premine</h2> <p className='keyfacts'>Project was fairly launched on Bitcointalk</p>

                    <h2 className='keyheaders'>Written from scratch</h2><p className='keyfacts'>This project is NOT a fork/copy of anything else</p>
                </Col>
                <Col>
                   <h2 className='keyheaders'>no "Team/Dev" fund</h2> <p className='keyfacts'>No unfair allocation to anybody aka "team"/"development" funds</p>

                    <h2 className='keyheaders'>100% mineable</h2><p className='keyfacts'>100% of supply is publicly mineable, no coins were minted</p>
                </Col>
                <Col>
                    <h2 className='keyheaders'>Modern Codebase</h2><p className='keyfacts'>No unfair allocation to anybody aka "team"/"development" funds</p>

                    <h2 className='keyheaders'>Open Source</h2><p className='keyfacts'>100% of supply is publicly mineable, no coins were minted</p>

                </Col>
                </Row>
                </Row>

            <Row><h1 style={{ display: 'flex', justifyContent: 'center' }}>REVOLUTIONARY FEATURES</h1>
                <p className='paragraph'>Warthog is a pioneer pushing the boundaries of blockchain technology. The following features are exclusive to Warthog.</p>
                <Col>
                    <p className='REVOLUTIONARY'><h2>Chain descriptor based sync<span class="text-icon">🔁</span></h2>Experimental new light-weight sync mechanism which requires less network communication and computational resources. For the first time, nodes can understand each other's forks and use this information to sync more efficiently.</p></Col>
                <Col><p className='REVOLUTIONARY'><h2>Proof of Balanced Work<span class="text-icon">⚡️</span></h2>The world's first algorithm using PoBW concept! Now power of CPU is also important! This brings us closer to Satoshi's original vision of decentralization than ever before since large farms cannot easily join: "one machine one vote"</p></Col>
                <Col><p className='REVOLUTIONARY'><h2>In-browser node<span class="text-icon">🗔</span></h2>Using bleeding edge technology like OPFS and SQLite's recent support for it, we are the world's first cryptocurrency which successfully ported full nodes to the browser - including chain store! Chain is not deleted when you close the browser.</p></Col>

            </Row>






        </Container>

    </div>
);

export default Landing;