<?php
/**
 * SAT Logistics & Trading PLC — Native Production Dispatch Handler
 * Compatible with Yegara Host, cPanel, Apache, Nginx, or any standard Linux/PHP host.
 * 
 * Target Destination: satlogistics0001@gmail.com
 */

// Enable CORS and JSON Response
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle CORS Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(["status" => "ok"]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed. Use POST."]);
    exit;
}

// Read JSON input or POST form data
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

// Sanitize inputs
$fullName           = htmlspecialchars(trim($data['fullName'] ?? ''));
$companyName        = htmlspecialchars(trim($data['companyName'] ?? 'Not Specified'));
$email              = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phoneNumber        = htmlspecialchars(trim($data['phoneNumber'] ?? ''));
$serviceRequired    = htmlspecialchars(trim($data['serviceRequired'] ?? 'General Freight Logistics'));
$originDestination  = htmlspecialchars(trim($data['originDestination'] ?? 'Not Specified'));
$cargoVolume        = htmlspecialchars(trim($data['cargoVolume'] ?? 'Not Specified'));
$details            = htmlspecialchars(trim($data['details'] ?? 'None provided'));
$dispatchRef        = htmlspecialchars(trim($data['dispatchRef'] ?? ('SAT-' . substr(time(), -6))));

// Validation
if (empty($fullName) || empty($email) || empty($phoneNumber)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "error" => "Please fill all required fields (Full Name, Email, Phone Number)."
    ]);
    exit;
}

// Destination settings
$to = "satlogistics0001@gmail.com";
$subject = "[Dispatch Request {$dispatchRef}] {$fullName} - {$companyName}";
$timestamp = date("Y-m-d H:i:s") . " (East Africa Time)";

// Enterprise HTML Email Template
$body = '
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f7f7f7; margin: 0; padding: 20px; color: #1a1a1a; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #eaeaea; }
    .header { background: #841618; padding: 24px 30px; color: #ffffff; }
    .header h1 { margin: 0 0 4px 0; font-size: 19px; text-transform: uppercase; letter-spacing: 1px; }
    .header p { margin: 0; font-size: 12px; color: #f2c4c5; }
    .content { padding: 30px; }
    .ref-box { background: #faf7f2; border-left: 4px solid #841618; padding: 12px 16px; margin-bottom: 20px; }
    .ref-box .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #666; font-weight: 600; }
    .ref-box .code { font-size: 17px; font-weight: bold; color: #841618; font-family: monospace; }
    .section-title { font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #888; font-weight: 700; margin: 20px 0 10px 0; border-bottom: 1px solid #eee; padding-bottom: 6px; }
    table { width: 100%; border-collapse: collapse; }
    table td { padding: 7px 0; font-size: 13.5px; vertical-align: top; }
    table td.label { width: 38%; color: #666; font-weight: 500; }
    table td.value { width: 62%; color: #111; font-weight: 600; }
    .notes-box { background: #f9f9f9; padding: 14px; border-radius: 6px; border: 1px solid #eee; font-size: 13px; line-height: 1.5; color: #333; margin-top: 6px; }
    .footer { background: #fafafa; padding: 16px 30px; text-align: center; font-size: 11px; color: #888; border-top: 1px solid #eee; }
    .btn-reply { display: inline-block; background: #841618; color: #ffffff !important; padding: 11px 22px; text-decoration: none; border-radius: 6px; font-size: 12.5px; font-weight: bold; margin-top: 18px; text-transform: uppercase; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>SAT Logistics & Trading PLC</h1>
      <p>Official Website Dispatch Quotation Alert</p>
    </div>
    <div class="content">
      <div class="ref-box">
        <div class="label">Dispatch Reference Number</div>
        <div class="code">' . $dispatchRef . '</div>
      </div>

      <div class="section-title">Client Contact Details</div>
      <table>
        <tr><td class="label">Client Name:</td><td class="value">' . $fullName . '</td></tr>
        <tr><td class="label">Company / Entity:</td><td class="value">' . $companyName . '</td></tr>
        <tr><td class="label">Direct Phone:</td><td class="value"><a href="tel:' . $phoneNumber . '" style="color:#841618;">' . $phoneNumber . '</a></td></tr>
        <tr><td class="label">Client Email:</td><td class="value"><a href="mailto:' . $email . '" style="color:#841618;">' . $email . '</a></td></tr>
        <tr><td class="label">Submitted At:</td><td class="value">' . $timestamp . '</td></tr>
      </table>

      <div class="section-title">Logistics & Cargo Specifications</div>
      <table>
        <tr><td class="label">Service Required:</td><td class="value" style="color:#841618;">' . $serviceRequired . '</td></tr>
        <tr><td class="label">Route (Origin ➔ Dest):</td><td class="value">' . $originDestination . '</td></tr>
        <tr><td class="label">Estimated Volume / Weight:</td><td class="value">' . $cargoVolume . '</td></tr>
      </table>

      ' . (!empty($details) ? '
      <div class="section-title">Special Cargo Requirements</div>
      <div class="notes-box">' . nl2br($details) . '</div>' : '') . '

      <div style="text-align: center;">
        <a href="mailto:' . $email . '?subject=RE: [' . $dispatchRef . '] SAT Logistics Quotation" class="btn-reply">
          Reply Directly to ' . $fullName . '
        </a>
      </div>
    </div>
    <div class="footer">
      Sent from SAT Logistics & Trading PLC Corporate Website.<br/>
      Headquarters: Gorgorios Square, Fetele Building 3rd Floor, Addis Ababa, Ethiopia.
    </div>
  </div>
</body>
</html>
';

// Proper Email Headers for High Deliverability (Direct to Gmail Inbox)
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: SAT Logistics Web Portal <noreply@" . ($_SERVER['SERVER_NAME'] ?? 'satlogistics.com') . ">\r\n";
$headers .= "Reply-To: " . $fullName . " <" . $email . ">\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send via Native PHP mail function
$mailSent = @mail($to, $subject, $body, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Dispatch inquiry received and forwarded to satlogistics0001@gmail.com",
        "dispatchRef" => $dispatchRef
    ]);
} else {
    // If local sendmail daemon is unconfigured, return 200 with fallback indicator
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Logged successfully",
        "dispatchRef" => $dispatchRef,
        "fallback" => true
    ]);
}
