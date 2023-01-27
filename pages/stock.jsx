import React from 'react'
import BoxComp from '../components/BoxComp';
import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useRouter } from 'next/router';


function stock() {
    let navigate = useRouter();

    const handleClick = () => {
        navigate('/addProduit');
    }


    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <BoxComp>
                        <div className='global'>

                            <Box>
                                <div>
                                    <h4 className=''> STOCK </h4>
                                    <h6 className="pro">Produits</h6>
                                </div>

                            </Box>

                            <Box
                                display="flex"
                                backgroundColor={"#d0d1d5"}
                                borderRadius="10px"
                                sx={{ width: 450 }}
                            >
                                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Rechercher un produit" />
                                <IconButton type="button" sx={{ p: 1 }}>
                                    <SearchIcon />
                                </IconButton>

                            </Box>

                            <Box backgroundColor={"#d0d1d5"} borderRadius="10px">
                                {/* <Link to="/addProduit"> */}
                                <IconButton onClick={handleClick} type="button" sx={{ width: 50, height: 50 }}>
                                    <AddOutlinedIcon />
                                </IconButton>
                                {/* </Link> */}
                            </Box>
                        </div>
                        <div className="send">
                            <div className="row">
                                <div className="col-6">
                                    <h5>Nom du Produit</h5>
                                </div>
                                <div className="col-6">
                                    <h5>Quantité en Stock</h5>
                                </div>
                            </div>

                            <div className="sendTo">

                                <div className="eco">
                                    {
                                        produits.map((produit, index) => (
                                            <div className="ecotwo" key={produit.id}>

                                                <div className="col-6">
                                                    <p className="gift"> {produit.name} </p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="gift"> {produit.qty} </p>
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                    </BoxComp>
                </div>
            </div>


        </div>
    )
}

export default stock


export const produits = [
    {
        id: 1,
        name: "A Gift For (Aveda Set)",
        qty: 15
    },
    {
        id: 2,
        name: "A New For (Aveline Set)",
        qty: 16
    },
    {
        id: 3,
        name: "Print Like Me (Aveda Set)",
        qty: 17
    },
    {
        id: 4,
        name: "An Able For Louis (Aveda Set)",
        qty: 18
    },
    {
        id: 5,
        name: "A Gift For (Aveda Set)",
        qty: 15
    },
    {
        id: 6,
        name: "A New For (Aveline Set)",
        qty: 16
    },
    {
        id: 7,
        name: "Print Like Me (Aveda Set)",
        qty: 17
    },
    {
        id: 8,
        name: "An Able For Louis (Aveda Set)",
        qty: 18
    },
    {
        id: 9,
        name: "Print Like Me (Aveda Set)",
        qty: 17
    },
    {
        id: 10,
        name: "An Able For Louis (Aveda Set)",
        qty: 18
    },
    {
        id: 11,
        name: "A Gift For (Aveda Set)",
        qty: 15
    },
    {
        id: 12,
        name: "A New For (Aveline Set)",
        qty: 16
    },
    {
        id: 13,
        name: "Print Like Me (Aveda Set)",
        qty: 17
    },
    {
        id: 14,
        name: "An Able For Louis (Aveda Set)",
        qty: 18
    }
]