import { renderingArcs, excludedServer } from "./animation";
import { arcsWestUsa, arcsEastUsa, arcsEurope, arcsAsia } from "./elements";
import { Frankfurt, NewYork, LosAngeles, Singapore, objectStorage, servers } from "./elements";
//     client server definition
export const clientServer = function () {
    const clientServer = servers.find((item) => item.classList.contains("client-server"));
    const clientServerLocation = clientServer.classList[1];
    const mainlandArcs = [...clientServer.parentElement.nextElementSibling.children];
    const clientServerArcs = mainlandArcs.filter((item) => item.classList[1].includes(clientServerLocation));
    const clientSample = [clientServerArcs, clientServerArcs, clientServerArcs, clientServerArcs, clientServerArcs];
    if (clientServer === servers[0]) {
        renderingArcs(
            ...clientSample,
            LosAngeles.Santiago,
            LosAngeles.Boston,
            LosAngeles.Antwerp,
            LosAngeles.Shenzhen,
            LosAngeles.Melbourne,
            objectStorage
        );
    } else if (clientServer === servers[1]) {
        renderingArcs(
            ...clientSample,
            NewYork.BuenosAires,
            NewYork.Dallas,
            NewYork.Kharkiv,
            NewYork.Tokyo,
            NewYork.Sydney,
            objectStorage
        );
    } else if (clientServer === servers[2]) {
        renderingArcs(
            ...clientSample,
            Frankfurt.Brasilia,
            Frankfurt.Houston,
            Frankfurt.Lisbon,
            Frankfurt.NewDelhi,
            Frankfurt.Perth,
            objectStorage
        );
    } else if (clientServer === servers[3]) {
        renderingArcs(
            ...clientSample,
            Singapore.Caracas,
            Singapore.Portland,
            Singapore.Stockholm,
            Singapore.Seoul,
            Singapore.Sydney,
            objectStorage
        );
    }
};
//     server load redistribution (arc redrawing)
export const redistributionRendering = function (table) {
    if (excludedServer() === servers[0]) {
        renderingArcs(
            arcsEastUsa,
            arcsEastUsa,
            arcsEurope,
            arcsAsia,
            arcsAsia,
            NewYork.BuenosAires,
            NewYork.Phoenix,
            Frankfurt.Lisbon,
            Singapore.Seoul,
            Singapore.Sydney,
            table
        );
    } else if (excludedServer() === servers[1]) {
        renderingArcs(
            arcsWestUsa,
            arcsWestUsa,
            arcsEurope,
            arcsAsia,
            arcsAsia,
            LosAngeles.Santiago,
            LosAngeles.Chicago,
            Frankfurt.Madrid,
            Singapore.NewDelhi,
            Singapore.Perth,
            table
        );
    } else if (excludedServer() === servers[2]) {
        renderingArcs(
            arcsWestUsa,
            arcsEastUsa,
            arcsEastUsa,
            arcsAsia,
            arcsAsia,
            LosAngeles.SaoPaulo,
            NewYork.Dallas,
            NewYork.Amsterdam,
            Singapore.Bangalore,
            Singapore.Melbourne,
            table
        );
    } else if (excludedServer() === servers[3]) {
        renderingArcs(
            arcsWestUsa,
            arcsEastUsa,
            arcsEurope,
            arcsEurope,
            arcsWestUsa,
            LosAngeles.Lima,
            NewYork.SanDiego,
            Frankfurt.Athens,
            Frankfurt.Dhaka,
            LosAngeles.Perth,
            table
        );
    } else {
        renderingArcs(
            arcsWestUsa,
            arcsEastUsa,
            arcsEurope,
            arcsAsia,
            arcsAsia,
            LosAngeles.Lima,
            NewYork.Phoenix,
            Frankfurt.Lisbon,
            Singapore.Dhaka,
            Singapore.Melbourne,
            table
        );
    }
};
