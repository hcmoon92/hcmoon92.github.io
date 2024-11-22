3GPP TS 22.101 V19.1.0 (2024-09)
Technical Specification
3rd Generation Partnership Project;
Technical Specification Group Services and System Aspects;

# Table of Contents

1. **1. Scope**                                                       9
1. **2. References**                                                  9
  - 2.1. **Normative references**                                      10
  - 2.2. **Informative references**                                    12
1. **3. Definitions and abbreviations**                               13
  - 3.1. **Definitions**                                               13
  - 3.2. **Abbreviations**                                             14
1. **4. General**                                                     15
  - 4.1. **Aims of 3GPP specifications**                               15
  - 4.2. **Standardisation of Service Capabilities**                   15
  - 4.3. **Efficient Use of Network Resources**                        15
  - 4.4. **Compatibility with Global Standards**                       18
  - 4.5. **Void**                                                      18
  - 4.6. **Functionality of Serving Network and Home Environment**     18
  - 4.7. **PLMN Architecture**                                         19
  - 4.8. **Interworking Between PLMN and Wireless LANs**               19
  - 4.9. **Network Sharing**                                           19
  - 4.10. **The Evolved Packet System**                                19
  - 4.11. **User Data Convergence**                                    19
1. **5. Evolution**                                                   21
  - 5.1. **Support of 2G services**                                    21
  - 5.2. **Provision and evolution of services**                       21
1. **6. Classification of services**                                  22
1. **7. Principles for new service capabilities**                     23
  - 7.1. **General**                                                   23
  - 7.2. **Multimedia**                                                23
  - 7.3. **Service Management Requirements**                           25
  - 7.4. **Automatic Device Detection**                                25
1. **8. Service architecture**                                        26
1. **10. Emergency Calls**                                            28
  - 10.1. **General requirements**                                     28
  - 10.2. **Emergency calls in the CS CN Domain**                      30
  - 10.3. **Emergency Calls in the PS CN Domain**                      31
  - 10.4. **Emergency calls in the IM CN subsystem**                   31
  - 10.5. **Void**                                                     34
  - 10.6. **Location Availability for Emergency Calls**                34
  - 10.7. **Transfer of data during emergency calls**                  34
  - 10.8. **Supplementary service interaction during emergency calls** 35
  - 10.9. **Emergency Calls in a MUSIM UE**                            35
  - 10.10. **Emergency Services over Non-public networks**             35
  - 10.11. **Short Message Service over IMS to emergency centre**      35
  - 10.12. **Emergency Sessions over Relay UEs**                       36
1. **11. Numbering principles**                                       37
  - 11.1. **Number portability**                                       37
  - 11.2. **Evolution path**                                           37
  - 11.3. **Void**                                                     38
  - 11.4. **Void**                                                     38
  - 11.5. **Void**                                                     38
  - 11.6. **Private numbering**                                        38
  - 11.7. **Numbering schemes**                                        38
  - 11.8. **Optimal routing**                                          38
1. **12. Human Factors and user procedures**                          40
1. **14. Types of features of UEs**                                   44
1. **15. Relationship between subscription and service delivery**     45
  - 15.1. **Subscription**                                             45
  - 15.2. **Other concepts associated with services**                  46
  - 15.3. **Requirements concerning service delivery**                 46
1. **16. Charging principles**                                        48
1. **17. Roaming**                                                    49
  - 17.1. **Assumptions**                                              49
  - 17.2. **Principle**                                                49
  - 17.3. **Requirements**                                             49
1. **18. Handover Requirements**                                      51
1. **19. Network Selection**                                          52
1. **20. Security**                                                   53
1. **21. Voice Call Continuity**                                      54
  - 21.1. **General**                                                  54
  - 21.2. **Support of Supplementary Services**                        54
  - 21.3. **Quality of Service**                                       55
  - 21.4. **Security**                                                 55
  - 21.5. **Emergency calls**                                          55
  - 21.6. **Charging**                                                 56
  - 21.7. **VCC Activation**                                           56
1. **22. IMS Centralized Services**                                   57
  - 22.1. **General**                                                  57
  - 22.2. **Service Consistency**                                      57
  - 22.3. **Service Continuity**                                       57
  - 22.4. **IMS Services**                                             57
  - 22.5. **Roaming Support**                                          58
1. **23. CS IP interconnection requirements**                         59
  - 23.1. **Introduction**                                             59
  - 23.2. **IP interconnect**                                          59
  - 23.3. **MSC server interconnect**                                  59
1. **25. System optimisation for communication with specific characteristics** 62
  - 25.1. **Void**                                                     62
  - 25.2. **Numbering Resource Efficiency**                            62
  - 25.3. **Network provided destination for uplink data**             62
  - 25.4. **PS only subscriptions**                                    62
1. **27. User plane congestion management**                           67
  - 27.1. **Introduction**                                             67
  - 27.2. **General**                                                  67
  - 27.3. **Prioritizing traffic**                                     67
  - 27.4. **Reducing traffic**                                         67
  - 27.5. **Void**                                                     68
1. **28. RAN Sharing Enhancements**                                   68
  - 28.1. **General**                                                  68
  - 28.2. **Specific E-UTRAN and NG-RAN Sharing requirements**         68
1. **29. Service exposure with 3rd party service providers**          73
  - 29.1. **General**                                                  73
  - 29.2. **Exposed Services and capabilities**                        73
1. **30. Flexible Mobile Service Steering**                           75
  - 30.1. **Introduction**                                             75
  - 30.2. **General Requirements**                                     76
1. **31. Control of traffic from UE-based applications toward associated server** 77
  - 31.1. **Description**                                              77
  - 31.2. **Requirements**                                             77
1. **32. 3GPP enhancement for TV application support**                77
  - 32.1. **Feature description**                                      77
  - 32.2. **Requirements**                                             78
1. **33. Usage over unlicensed access**                               81
  - 33.1. **Description**                                              81
  - 33.2. **Requirements**                                             81
1. **34. Void**                                                       81
  - 34.1. **Void**                                                     81
  - 34.2. **Void**                                                     81
1. **35. Restricted local operator services**                         81
  - 35.1. **Description**                                              81
  - 35.2. **Requirements**                                             81
