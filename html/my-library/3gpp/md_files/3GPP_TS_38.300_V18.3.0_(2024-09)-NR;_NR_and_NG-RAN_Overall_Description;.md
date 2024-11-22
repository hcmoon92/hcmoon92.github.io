3GPP TS 38.300 V18.3.0 (2024-09)
Technical Specification
3rd Generation Partnership Project;
Technical Specification Group Radio Access Network;

# Table of Contents

1. **1. Scope**                                                       14
1. **2. References**                                                  14
1. **3. Abbreviations and Definitions**                               16
  - 3.1. **Abbreviations**                                             16
  - 3.2. **Definitions**                                               20
1. **4. Overall Architecture and Functional Split**                   24
  - 4.1. **Overall Architecture**                                      24
  - 4.2. **Functional Split**                                          25
  - 4.3. **Network Interfaces**                                        27
  - 4.4. **Radio Protocol Architecture**                               29
  - 4.5. **Multi-Radio Dual Connectivity**                             30
  - 4.6. **Radio Access Network Sharing**                              30
  - 4.7. **Integrated Access and Backhaul**                            30
  - 4.8. **Non-Public Networks**                                       36
  - 4.9. **Network-Controlled Repeaters**                              37
1. **5. Physical Layer**                                              39
  - 5.2. **Downlink**                                                  40
  - 5.3. **Uplink**                                                    44
  - 5.4. **Carrier aggregation**                                       48
  - 5.5. **Transport Channels**                                        49
  - 5.6. **Access to Shared Spectrum**                                 50
  - 5.7. **Sidelink**                                                  51
1. **6. Layer 2**                                                     52
  - 6.1. **Overview**                                                  52
  - 6.2. **MAC Sublayer**                                              56
  - 6.3. **RLC Sublayer**                                              57
  - 6.4. **PDCP Sublayer**                                             58
  - 6.5. **SDAP Sublayer**                                             59
  - 6.6. **L2 Data Flow**                                              59
  - 6.7. **Carrier Aggregation**                                       59
  - 6.8. **Dual Connectivity**                                         61
  - 6.9. **Supplementary Uplink**                                      61
  - 6.10. **Bandwidth Adaptation**                                     61
  - 6.11. **Backhaul Adaptation Protocol Sublayer**                    62
1. **7. RRC**                                                         65
  - 7.1. **Services and Functions**                                    65
  - 7.2. **Protocol States**                                           66
  - 7.3. **System Information Handling**                               67
  - 7.4. **Access Control**                                            70
  - 7.5. **UE Capability Retrieval framework**                         70
  - 7.6. **Transport of NAS Messages**                                 70
  - 7.7. **Carrier Aggregation**                                       71
  - 7.8. **Bandwidth Adaptation**                                      71
  - 7.9. **UE Assistance Information**                                 71
  - 7.10. **Segmentation of RRC messages**                             72
1. **8. NG Identities**                                               72
  - 8.1. **UE Identities**                                             72
  - 8.2. **Network Identities**                                        73
  - 8.3. **User Data Transport on the CN-RAN Interface**               74
1. **9. Mobility and State Transitions**                              75
  - 9.1. **Overview**                                                  75
  - 9.2. **Intra-NR**                                                  76
  - 9.3. **Inter RAT**                                                 114
  - 9.4. **Roaming and Access Restrictions**                           118
1. **10. Scheduling**                                                 119
  - 10.1. **Basic Scheduler Operation**                                119
  - 10.2. **Downlink Scheduling**                                      120
  - 10.3. **Uplink Scheduling**                                        120
  - 10.4. **Measurements to Support Scheduler Operation**              121
  - 10.5. **Rate Control**                                             122
  - 10.7. **E-UTRA-NR Cell Resource Coordination**                     123
  - 10.8. **Cross Carrier Scheduling**                                 123
  - 10.9. **IAB Resource Configuration**                               123
  - 10.10. **Autonomous Denial for IDC**                               124
  - 10.11. **Multi-cell scheduling by a single DCI**                   124
1. **11. UE Power Saving**                                            125
1. **12. QoS**                                                        126
  - 12.1. **Overview**                                                 126
  - 12.2. **Explicit Congestion Notification**                         129
1. **13. Security**                                                   129
  - 13.1. **Overview and Principles**                                  129
  - 13.2. **Security Termination Points**                              131
  - 13.3. **State Transitions and Mobility**                           131
1. **14. UE Capabilities**                                            132
1. **15. Self-Configuration and Self-Optimisation**                   133
  - 15.1. **Definitions**                                              133
  - 15.2. **Void**                                                     133
  - 15.3. **Self-configuration**                                       133
  - 15.4. **Support for Energy Saving**                                138
  - 15.5. **Self-optimisation**                                        140
1. **16. Verticals Support**                                          148
  - 16.1. **URLLC**                                                    148
  - 16.2. **IMS Voice**                                                151
  - 16.3. **Network Slicing**                                          152
  - 16.4. **Public Warning System**                                    158
  - 16.5. **Emergency Services**                                       159
  - 16.6. **Stand-Alone NPN**                                          159
  - 16.7. **Public Network Integrated NPN**                            161
  - 16.8. **Support for Time Sensitive Communications**                162
  - 16.9. **Sidelink**                                                 166
  - 16.10. **Multicast and Broadcast Services**                        177
  - 16.11. **Minimization of Service Interruption**                    187
  - 16.12. **Sidelink Relay**                                          187
  - 16.14. **Non-Terrestrial Networks**                                208
  - 16.15. **eXtended Reality Services**                               216
  - 16.16. **ECN marking for L4S and congestion information exposure** 218
  - 16.17. **Support for TSN enabled Transport Network**               219
  - 16.18. **Support for Aerial UE Communication**                     219
  - 16.19. **Support for Air to Ground Networks**                      221
  - 16.21. **Multi-path Relay**                                        223
  - 16.22. **Support of 2Rx XR devices**                               231
1. **17. Interference Management**                                    231
  - 17.1. **Remote Interference Management**                           231
  - 17.2. **Cross-Link Interference Management**                       232
1. **18. Small Data Transmission**                                    232
  - 18.0. **General**                                                  232
  - 18.1. **Support of SDT procedure over RACH**                       234
  - 18.2. **SDT with UE context relocation**                           234
  - 18.3. **SDT without UE context relocation**                        236
1. **19. Support for NR coverage enhancements**                       238
1. **20. Support for Multi-USIM devices**                             239
  - 20.1. **General**                                                  239
  - 20.2. **Paging Collision Avoidance**                               239
  - 20.3. **UE notification on Network Switching**                     240
  - 20.4. **Temporary UE capability restriction and removal of restriction** 240
1. **21. Application Layer Measurement Collection**                   241
  - 21.1. **Overview**                                                 241
  - 21.2. **QoE Measurement Configuration**                            241
  - 21.3. **QoE Measurement Continuity for Mobility**                  243
  - 21.4. **RAN Visible QoE Measurements**                             244
  - 21.5. **Alignment of MDT and QoE Measurements**                    245
