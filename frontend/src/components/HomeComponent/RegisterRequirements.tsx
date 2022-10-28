import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function RegisterRequirements() {
    return (
        <Container sx={{ marginTop: 2}} maxWidth="md">
          <Box display="flex" sx={{ marginTop: 10, }}>
              <Typography component="h2" variant="h4" color="primary" sx={{ marginTop: 2, marginBottom: 2, marginLeft: 39 }}>
                  ระบบสมัครสมาชิก
              </Typography>
          </Box>
          <Box>
              <Box sx={{ paddingX: 2, paddingY: 1, }}>
                  <Typography component="h2" variant="h5" color="primary" sx={{ marginTop: 2 }}>
                      Requirement(ระบบสมัครสมาชิก)
                  </Typography>
                  <Typography color="action" sx={{ paddingX: 5 }}>
                  ระบบสมัครสมาชิกการจองใช้ห้องของบริษัท Room Booking เป็นระบบที่ผู้ใช้บริการ
                  </Typography>
                  <Typography color="action">
                  สามารถสมัครเป็นสมาชิกของระบบสำหรับการจองใช้ห้องเรียนทฤษฎี ห้องเรียนปฏิบัติการและห้องสมุด โดยการสมัครสมาชิกจะมีพนักงานระบบเป็นผู้ทำการบักทึกข้อมูลของผู้ใช้บริการเช่น คำนำหน้าชื่อ ชื่อ-สกุล วันเดือนปีเกิด เลขประจำตัวประชาชน อีเมล รหัสผ่าน เพศ หมายเลขโทรศัพท์ ที่อยู่ (เลขที่บ้าน, หมู่บ้าน, ตำบล, อำเภอ, จังหวัด) และพนักงานบันทึกข้อมูล เป็นต้น 
                  </Typography>
                  <Typography color="action" sx={{ paddingX: 5 }}>
                  นอกจากนี้ ผู้ใช้บริการซึ่งเป็นสมาชิกสามารถเลือกใช้บริการระบบการจองใช้ห้องได้ตามที่
                  </Typography>
                  <Typography color="action">
                  ต้องการ รวมทั้งการบริการต่างๆที่มีอยู่ในระบบ
                  </Typography>
                  <Typography component="h2" variant="h5" color="primary" sx={{ marginTop: 4 }}>
                      User Story(ระบบสมัครสมาชิก)
                  </Typography>
                  <Typography color="action">
                    <b>ในบทบาทของ</b> พนักงานระบบ
                  </Typography>
                  <Typography color="action">
                    <b>ฉันต้องการ</b> บันทึกข้อมูลของผู้ใช้บริการ
                  </Typography>
                  <Typography color="action">
                    <b>เพื่อ</b> ให้ได้ข้อมูลของผู้ใช้บริการ
                  </Typography>
              </Box>
          </Box>
        </Container>
      );
}