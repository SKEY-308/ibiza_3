import React, { useEffect, useState } from 'react'
import BoxComp from '../components/BoxComp';
import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { client } from '../lib/client';
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";


export const caisseQuery = () => {
    const query = `*[_type == "clients"]`;
    return query;
};


const caisse = () => {
    const [caisses, setCaisses] = useState();
    let navigate = useRouter();

    const handleClick = () => {
        navigate('/addToCaisse');
    }


    // useEffect(() => {
    //     const query = caisseQuery();

    //     client.fetch(query).then((data) => {
    //         console.log(data);
    //         setCaisses(data);
    //     });
    // }, []);


    return (
        <div>
            <div className="row">
                <div className="col-12">
                    {/* <BoxComp> */}
                    <div className="card">
                        <div className='global'>
                            <Box>
                                <div>
                                    <h4 className=''> CAISSE </h4>
                                    <h6 className="pro">Clients dans le Salon</h6>
                                </div>
                            </Box>

                            <Box
                                display="flex"
                                backgroundColor={"#d0d1d5"}
                                borderRadius="10px"
                                sx={{ width: 450 }}
                            >
                                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Rechercher un Client" />
                                <IconButton type="button" sx={{ p: 1 }}>
                                    <SearchIcon />
                                </IconButton>
                            </Box>

                            <Box backgroundColor={"#d0d1d5"} borderRadius="10px">
                                <IconButton onClick={handleClick} type="button" sx={{ width: 50, height: 50 }}>
                                    <AddOutlinedIcon />
                                </IconButton>
                            </Box>
                        </div>

                        <div className="send">
                            <div className="row">
                                <div className="col-3">
                                    <h5>Tickets Emis</h5>
                                </div>
                                <div className="col-3">
                                    <h5>Noms Clients</h5>
                                </div>
                                <div className="col-3">
                                    <h5>Dates</h5>
                                </div>
                                <div className="col-3">
                                    <h5>Totals Encaissés</h5>
                                </div>
                            </div>

                            <div className="sendTo">
                                <div className="eco">
                                    {
                                        (caisses && caisses.map((caisse, index) => (

                                            (caisse &&
                                                <Link className="ecothree" href={`caisse/${caisse._id
                                                    }`} key={caisse._id}>

                                                    <div className="col-3">
                                                        <h6 className="gift">I#{caisse._rev}</h6>
                                                    </div>
                                                    <div className="col-3">
                                                        <h6 className="gift"> {caisse.nameclient
                                                        } </h6>
                                                    </div>
                                                    <div className="col-3">
                                                        <h6 className="gift"> {caisse.date
                                                        } </h6>
                                                    </div>
                                                    <div className="col-3">
                                                        <h6 className="gift"> € {caisse.mtn}</h6>
                                                    </div>

                                                </Link>)
                                        )))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </BoxComp> */}
                </div>
            </div>
        </div>
    )
}

export default caisse



// export const caisses = [
//     {
//         id: 1,
//         ticket: "12D35",
//         nameClient: "Molly Finess",
//         date: "01/06/2020",
//         Mtn: '€ 21'
//     },
//     {
//         id: 2,
//         ticket: "12D37",
//         nameClient: "Athena Kesh",
//         date: "01/06/2020",
//         Mtn: '€ 915'
//     },
//     {
//         id: 3,
//         ticket: "12D39",
//         nameClient: "Pamela Patern",
//         date: "01/06/2020",
//         Mtn: '€ 25'
//     },
//     {
//         id: 4,
//         ticket: "12D41",
//         nameClient: "Ildy Glock",
//         date: "01/06/2020",
//         Mtn: '€ 75'
//     },
//     {
//         id: 5,
//         ticket: "12D43",
//         nameClient: "Sami Kioni",
//         date: "01/06/2020",
//         Mtn: '€ 21,50'
//     },
//     {
//         id: 6,
//         ticket: "12D45",
//         nameClient: "Eliot Kon",
//         date: "01/06/2020",
//         Mtn: '€ 68'
//     },
//     {
//         id: 7,
//         ticket: "12D47",
//         nameClient: "Kan Abdel",
//         date: "01/06/2020",
//         Mtn: '€ 295'
//     },
//     {
//         id: 8,
//         ticket: "12D49",
//         nameClient: "Enock Gonni",
//         date: "01/06/2020",
//         Mtn: '€ 299'
//     },
//     {
//         id: 9,
//         ticket: "12D51",
//         nameClient: "Polo Gin",
//         date: "01/06/2020",
//         Mtn: '€ 366'
//     },
//     {
//         id: 10,
//         ticket: "12D53",
//         nameClient: "Simon Juliette",
//         date: "01/06/2020",
//         Mtn: '€ 209'
//     },
//     {
//         id: 11,
//         ticket: "12D55",
//         nameClient: "Simone June",
//         date: "01/06/2020",
//         Mtn: '€ 76'
//     },
//     {
//         id: 12,
//         ticket: "12D57",
//         nameClient: "Carl Marx",
//         date: "01/06/2020",
//         Mtn: '€ 21'
//     },
//     {
//         id: 13,
//         ticket: "12D59",
//         nameClient: "Kustin Bee",
//         date: "01/06/2020",
//         Mtn: '€ 20'
//     },
//     {
//         id: 14,
//         ticket: "12D61",
//         nameClient: "Alan Walker",
//         date: "01/06/2020",
//         Mtn: '€ 215'
//     }
// ]