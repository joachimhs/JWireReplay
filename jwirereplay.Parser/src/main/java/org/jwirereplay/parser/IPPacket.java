package org.jwirereplay.parser;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Arrays;

public class IPPacket extends Packet {
	public InetAddress src_ip;
    public InetAddress dst_ip;
    private int ipHeaderLength;
    
    public IPPacket() {
		super();
	}
    
    public IPPacket(byte[] packetHeaderArray, byte[] packetContents) {
    	super(packetHeaderArray);
		ipHeaderLength = (packetContents[14] & 0xf) * 4;
		try {
			src_ip = InetAddress.getByAddress(Arrays.copyOfRange(packetContents,14+12,14+16));
			dst_ip= InetAddress.getByAddress(Arrays.copyOfRange(packetContents,14+16,14+20));
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }

	public InetAddress getSrc_ip() {
		return src_ip;
	}

	public void setSrc_ip(InetAddress src_ip) {
		this.src_ip = src_ip;
	}

	public InetAddress getDst_ip() {
		return dst_ip;
	}

	public void setDst_ip(InetAddress dst_ip) {
		this.dst_ip = dst_ip;
	}
	
	public int getIPHeaderLength() {
		return ipHeaderLength;
	}
    
}
