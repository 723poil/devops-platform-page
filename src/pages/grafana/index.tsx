import Grid from "@mui/material/Grid";
import TypographyHeadings from "../../views/typography/TypographyHeadings";
import TypographyTexts from "../../views/typography/TypographyTexts";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

const GrafanaPage = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Card>
                    <CardHeader
                        title='Grafana'
                        titleTypographyProps={{
                            sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
                        }}
                    />
                    <CardContent>
                        <iframe src="http://localhost:3000/d/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1712641383032&to=1712727783032&theme=light&kiosk" height="680" width="100%" style={{border: 'none', borderRadius: '5px'}}/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default GrafanaPage
