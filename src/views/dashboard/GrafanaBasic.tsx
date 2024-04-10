import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import {NextRouter, useRouter} from "next/router";

const GrafanaBasic = () => {

    const router: NextRouter = useRouter();

    const handleClick = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        await router.push('/grafana');
    }

    return (
        <Card>
            <CardHeader
                title='Grafana'
                titleTypographyProps={{
                    sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
                }}
                action={
                    <IconButton onClick={handleClick} size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
                        more
                    </IconButton>
                }
            />
            <CardContent>
                <iframe src="http://localhost:3000/d/adi87a80ntmv4d/pc-usage?orgId=1&refresh=1m&from=1712591537706&to=1712677937707&theme=light&kiosk" height="230" width="100%" style={{border: 'none', borderRadius: '5px'}}/>
            </CardContent>
        </Card>
    )
}

export default GrafanaBasic