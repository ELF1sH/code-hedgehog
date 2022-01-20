import { Row, Col } from 'react-bootstrap'
import LinkWithIcon from './LinkWithIcon'

import archiveIcon from '../../images/LinkIcons/ArchiveIcon.svg'
import createIcon from '../../images/LinkIcons/CreateIcon.svg'
import joinIcon from '../../images/LinkIcons/JoinIcon.svg'

import { useTranslation } from "react-i18next"

const ClassesHeader = () => {
    const { t } = useTranslation()

    return (
        <Row className="d-flex justify-content-between mb-4">
            <Col lg={4} md={4} className="px-0">
                <h1 className="font-weight-bold section-header">{t("classes.header.name")}</h1>
            </Col>
            <Col lg={8} md={8} className="d-flex align-items-center flex-wrap px-0 links-wrapper">
                <LinkWithIcon name={t('classes.header.links.link1')} className="mr-2" iconSrc={createIcon} />
                <LinkWithIcon name={t('classes.header.links.link2')} className="mr-1" iconSrc={joinIcon} />
                <LinkWithIcon name={t('classes.header.links.link3')} iconSrc={archiveIcon} />
            </Col>
        </Row>
    )
}

export default ClassesHeader