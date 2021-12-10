import React,{useEffect} from "react";
import{ApolloClient,HttpLink,InMemoryCache,gql,useQuery} from "@apollo/client";
import GET_PROYECTOS from "../Apollo/gql/getProyectos";

export default function ProjectsPage() {

  const {loading,data,error}=useQuery(GET_PROYECTOS)
    return (
        <div>
           {data && <p>imprimiendo error...</p>}
        </div>
    )
}
